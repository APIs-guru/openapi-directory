# Feature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geometry** | **str** |  | [optional] [default to '{'type':'Polygon','coordinates':[[]]}']
**properties** | **str** |  | [optional] [default to '{'height':4,'material':1}']
**type** | **str** |  | [optional] [default to 'Feature']

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


