# Tax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of tax. Mandatory if taxSystem &#x3D;&#x3D; &#39;tax_line_amounts&#39;. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element. | [optional] 
**category** | **str** | The allowed values depend on the country of the tax: ++++ &lt;ul&gt;    &lt;li&gt;        AU:        &lt;ul&gt;            &lt;li&gt;standard (10%, 5.5%)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        EU:        &lt;ul&gt;            &lt;li&gt;standard (percentages country dependent)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;            &lt;li&gt;reverse_charge (0%)&lt;/li&gt;            &lt;li&gt;intra_community (0%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        IN:        &lt;ul&gt;            &lt;li&gt;igst (28%, 18%, 12%, 5%, 3%, 0.25%)&lt;/li&gt;            &lt;li&gt;sgst (14%, 9%, 6%, 2.5%, 1.5%&lt;/li&gt;            &lt;li&gt;cgst (14%, 9%, 6%, 2.5%, 1.5%&lt;/li&gt;            &lt;li&gt;cess (any percentage)&lt;/li&gt;            &lt;li&gt;state_cess (any percentage)&lt;/li&gt;            &lt;li&gt;reverse_charge (0%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        JP:        &lt;ul&gt;            &lt;li&gt;standard (10%, 8%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        MY:        &lt;ul&gt;            &lt;li&gt;standard (10%, 6%, 5%)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        NZ:        &lt;ul&gt;            &lt;li&gt;standard (15%)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        SG:        &lt;ul&gt;            &lt;li&gt;standard (7%; 8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;deemed_supply (7%; 8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;srca_c (7%; 8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;srovr (7%; NOT to be used from 2023-01-01)&lt;/li&gt;            &lt;li&gt;srovr_rs (8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;srovr_lvg (8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;srlvg (8% from 2023-01-01; 9% from 2024-01-01)&lt;/li&gt;            &lt;li&gt;srca_s (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;            &lt;li&gt;not_registered (0%)&lt;/li&gt;            &lt;li&gt;zero_rated (0%)&lt;/li&gt;            &lt;li&gt;regulation33_exempt (0%)&lt;/li&gt;            &lt;li&gt;nonregulation33_exempt (0%)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;    &lt;li&gt;        US:        &lt;ul&gt;            &lt;li&gt;standard (any percentage)&lt;/li&gt;            &lt;li&gt;export (0%)&lt;/li&gt;            &lt;li&gt;exempt (0%)&lt;/li&gt;            &lt;li&gt;outside_scope (0%)&lt;/li&gt;        &lt;/ul&gt;    &lt;/li&gt;&lt;/ul&gt; ++++ | [optional] 
**country** | [**Country**](Country.md) |  | 
**percentage** | **float** | The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem &#x3D;&#x3D; &#39;tax_line_percentages&#39; | [optional] 

## Example

```python
from openapi_client.models.tax import Tax

# TODO update the JSON string below
json = "{}"
# create an instance of Tax from a JSON string
tax_instance = Tax.from_json(json)
# print the JSON string representation of the object
print(Tax.to_json())

# convert the object into a dict
tax_dict = tax_instance.to_dict()
# create an instance of Tax from a dict
tax_from_dict = Tax.from_dict(tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


