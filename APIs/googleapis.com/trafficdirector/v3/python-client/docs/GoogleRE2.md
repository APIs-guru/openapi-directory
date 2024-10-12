# GoogleRE2

Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``, which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented each time the program size exceeds the warn level threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_program_size** | **int** | This field controls the RE2 \&quot;program size\&quot; which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. .. note:: Although this field is deprecated, the program size will still be checked against the global &#x60;&#x60;re2.max_program_size.error_level&#x60;&#x60; runtime value. | [optional] 

## Example

```python
from openapi_client.models.google_re2 import GoogleRE2

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleRE2 from a JSON string
google_re2_instance = GoogleRE2.from_json(json)
# print the JSON string representation of the object
print(GoogleRE2.to_json())

# convert the object into a dict
google_re2_dict = google_re2_instance.to_dict()
# create an instance of GoogleRE2 from a dict
google_re2_from_dict = GoogleRE2.from_dict(google_re2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


