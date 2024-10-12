# WannabeFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** | BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE | 

## Example

```python
from openapi_client.models.wannabe_feature import WannabeFeature

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeFeature from a JSON string
wannabe_feature_instance = WannabeFeature.from_json(json)
# print the JSON string representation of the object
print(WannabeFeature.to_json())

# convert the object into a dict
wannabe_feature_dict = wannabe_feature_instance.to_dict()
# create an instance of WannabeFeature from a dict
wannabe_feature_from_dict = WannabeFeature.from_dict(wannabe_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


