# Tsx

Time series expression (TSX) written as a single string. Examples: \"$event.Status.String='Good'\", \"avg($event.Temperature)\". Refer to the documentation on how to write time series expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tsx** | **str** | Time series expression (TSX) written as a single string. Examples: \&quot;$event.Status.String&#x3D;&#39;Good&#39;\&quot;, \&quot;avg($event.Temperature)\&quot;. Refer to the documentation on how to write time series expressions. | 

## Example

```python
from openapi_client.models.tsx import Tsx

# TODO update the JSON string below
json = "{}"
# create an instance of Tsx from a JSON string
tsx_instance = Tsx.from_json(json)
# print the JSON string representation of the object
print(Tsx.to_json())

# convert the object into a dict
tsx_dict = tsx_instance.to_dict()
# create an instance of Tsx from a dict
tsx_from_dict = Tsx.from_dict(tsx_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


