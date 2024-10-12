# Availability

A message containing availability data relevant to DoubleClick Search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | DS advertiser ID. | [optional] 
**agency_id** | **str** | DS agency ID. | [optional] 
**availability_timestamp** | **str** | The time by which all conversions have been uploaded, in epoch millis UTC. | [optional] 
**customer_id** | **str** | Customer ID of a client account in the new Search Ads 360 experience. | [optional] 
**segmentation_id** | **str** | The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID). | [optional] 
**segmentation_name** | **str** | The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name). | [optional] 
**segmentation_type** | **str** | The segmentation type that this availability is for (its default value is &#x60;FLOODLIGHT&#x60;). | [optional] 

## Example

```python
from openapi_client.models.availability import Availability

# TODO update the JSON string below
json = "{}"
# create an instance of Availability from a JSON string
availability_instance = Availability.from_json(json)
# print the JSON string representation of the object
print(Availability.to_json())

# convert the object into a dict
availability_dict = availability_instance.to_dict()
# create an instance of Availability from a dict
availability_from_dict = Availability.from_dict(availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


