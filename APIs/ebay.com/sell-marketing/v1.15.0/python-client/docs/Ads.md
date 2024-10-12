# Ads

This type defines the container for an array of ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | [**List[Ad]**](Ad.md) | A list of ad IDs. An ad ID is generated for each successfully created ad. | [optional] 

## Example

```python
from openapi_client.models.ads import Ads

# TODO update the JSON string below
json = "{}"
# create an instance of Ads from a JSON string
ads_instance = Ads.from_json(json)
# print the JSON string representation of the object
print(Ads.to_json())

# convert the object into a dict
ads_dict = ads_instance.to_dict()
# create an instance of Ads from a dict
ads_from_dict = Ads.from_dict(ads_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


