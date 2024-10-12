# RegionalAvailability

The availability information of sizes across regions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Corresponding region | [optional] 
**size_availabilities** | [**List[SizeAvailability]**](SizeAvailability.md) | List of all the size information for the region | [optional] 

## Example

```python
from openapi_client.models.regional_availability import RegionalAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalAvailability from a JSON string
regional_availability_instance = RegionalAvailability.from_json(json)
# print the JSON string representation of the object
print(RegionalAvailability.to_json())

# convert the object into a dict
regional_availability_dict = regional_availability_instance.to_dict()
# create an instance of RegionalAvailability from a dict
regional_availability_from_dict = RegionalAvailability.from_dict(regional_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


