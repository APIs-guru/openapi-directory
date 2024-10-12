# Xxe

Information reported for an XXE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload_location** | **str** | Location within the request where the payload was placed. | [optional] 
**payload_value** | **str** | The XML string that triggered the XXE vulnerability. Non-payload values might be redacted. | [optional] 

## Example

```python
from openapi_client.models.xxe import Xxe

# TODO update the JSON string below
json = "{}"
# create an instance of Xxe from a JSON string
xxe_instance = Xxe.from_json(json)
# print the JSON string representation of the object
print(Xxe.to_json())

# convert the object into a dict
xxe_dict = xxe_instance.to_dict()
# create an instance of Xxe from a dict
xxe_from_dict = Xxe.from_dict(xxe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


