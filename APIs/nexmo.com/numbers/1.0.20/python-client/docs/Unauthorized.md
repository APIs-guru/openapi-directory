# Unauthorized


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The status code of the response. &#x60;200&#x60; indicates a successful request. | [optional] 
**error_code_label** | **str** | The status code description | [optional] 

## Example

```python
from openapi_client.models.unauthorized import Unauthorized

# TODO update the JSON string below
json = "{}"
# create an instance of Unauthorized from a JSON string
unauthorized_instance = Unauthorized.from_json(json)
# print the JSON string representation of the object
print(Unauthorized.to_json())

# convert the object into a dict
unauthorized_dict = unauthorized_instance.to_dict()
# create an instance of Unauthorized from a dict
unauthorized_from_dict = Unauthorized.from_dict(unauthorized_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


