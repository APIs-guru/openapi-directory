# Lake

Represents a Lake resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id} | [optional] 

## Example

```python
from openapi_client.models.lake import Lake

# TODO update the JSON string below
json = "{}"
# create an instance of Lake from a JSON string
lake_instance = Lake.from_json(json)
# print the JSON string representation of the object
print(Lake.to_json())

# convert the object into a dict
lake_dict = lake_instance.to_dict()
# create an instance of Lake from a dict
lake_from_dict = Lake.from_dict(lake_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


