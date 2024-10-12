# GoogleTypeDecimal

A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The decimal value, as a string. The string representation consists of an optional sign, &#x60;+&#x60; (&#x60;U+002B&#x60;) or &#x60;-&#x60; (&#x60;U+002D&#x60;), followed by a sequence of zero or more decimal digits (\&quot;the integer\&quot;), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as &#x60;0&#x60;. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character &#x60;e&#x60; (&#x60;U+0065&#x60;) or &#x60;E&#x60; (&#x60;U+0045&#x60;) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided &#x60;+&#x60; sign (&#x60;+2.5&#x60; -&gt; &#x60;2.5&#x60;). - Replacing a zero-length integer value with &#x60;0&#x60; (&#x60;.5&#x60; -&gt; &#x60;0.5&#x60;). - Coercing the exponent character to upper-case, with explicit sign (&#x60;2.5e8&#x60; -&gt; &#x60;2.5E+8&#x60;). - Removing an explicitly-provided zero exponent (&#x60;2.5E0&#x60; -&gt; &#x60;2.5&#x60;). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: &#x60;2.5E-1&#x60; &lt;-&gt; &#x60;0.25&#x60;). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the &#x60;.&#x60; character is supported to divide the integer and the fraction; &#x60;,&#x60; **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString &#x3D; &#39;&#39; | [Sign] Significand [Exponent]; Sign &#x3D; &#39;+&#39; | &#39;-&#39;; Significand &#x3D; Digits &#39;.&#39; | [Digits] &#39;.&#39; Digits; Exponent &#x3D; (&#39;e&#39; | &#39;E&#39;) [Sign] Digits; Digits &#x3D; { &#39;0&#39; | &#39;1&#39; | &#39;2&#39; | &#39;3&#39; | &#39;4&#39; | &#39;5&#39; | &#39;6&#39; | &#39;7&#39; | &#39;8&#39; | &#39;9&#39; }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with &#x60;400 Bad Request&#x60; (&#x60;INVALID_ARGUMENT&#x60; in gRPC) if precision would be lost. Services **should** error with &#x60;400 Bad Request&#x60; (&#x60;INVALID_ARGUMENT&#x60; in gRPC) if the service receives a value outside of the supported range. | [optional] 

## Example

```python
from openapi_client.models.google_type_decimal import GoogleTypeDecimal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleTypeDecimal from a JSON string
google_type_decimal_instance = GoogleTypeDecimal.from_json(json)
# print the JSON string representation of the object
print(GoogleTypeDecimal.to_json())

# convert the object into a dict
google_type_decimal_dict = google_type_decimal_instance.to_dict()
# create an instance of GoogleTypeDecimal from a dict
google_type_decimal_from_dict = GoogleTypeDecimal.from_dict(google_type_decimal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


