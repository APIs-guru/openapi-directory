# AddClutterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[Feature]**](Feature.md) |  | [optional] 
**name** | **str** |  | [optional] [default to 'Clutter']
**type** | **str** |  | [optional] [default to 'FeatureCollection']

## Example

```python
from openapi_client.models.add_clutter_request import AddClutterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddClutterRequest from a JSON string
add_clutter_request_instance = AddClutterRequest.from_json(json)
# print the JSON string representation of the object
print(AddClutterRequest.to_json())

# convert the object into a dict
add_clutter_request_dict = add_clutter_request_instance.to_dict()
# create an instance of AddClutterRequest from a dict
add_clutter_request_from_dict = AddClutterRequest.from_dict(add_clutter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


