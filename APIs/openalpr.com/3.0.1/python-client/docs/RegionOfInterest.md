# RegionOfInterest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** |  | [optional] 
**width** | **int** |  | [optional] 
**x** | **int** |  | [optional] 
**y** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.region_of_interest import RegionOfInterest

# TODO update the JSON string below
json = "{}"
# create an instance of RegionOfInterest from a JSON string
region_of_interest_instance = RegionOfInterest.from_json(json)
# print the JSON string representation of the object
print(RegionOfInterest.to_json())

# convert the object into a dict
region_of_interest_dict = region_of_interest_instance.to_dict()
# create an instance of RegionOfInterest from a dict
region_of_interest_from_dict = RegionOfInterest.from_dict(region_of_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


