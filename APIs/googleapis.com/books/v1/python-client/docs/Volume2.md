# Volume2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Volume]**](Volume.md) | A list of volumes. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.volume2 import Volume2

# TODO update the JSON string below
json = "{}"
# create an instance of Volume2 from a JSON string
volume2_instance = Volume2.from_json(json)
# print the JSON string representation of the object
print(Volume2.to_json())

# convert the object into a dict
volume2_dict = volume2_instance.to_dict()
# create an instance of Volume2 from a dict
volume2_from_dict = Volume2.from_dict(volume2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


