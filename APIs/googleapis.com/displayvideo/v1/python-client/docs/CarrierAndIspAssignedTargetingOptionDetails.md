# CarrierAndIspAssignedTargetingOptionDetails

Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the carrier or ISP. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60;. | [optional] 

## Example

```python
from openapi_client.models.carrier_and_isp_assigned_targeting_option_details import CarrierAndIspAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CarrierAndIspAssignedTargetingOptionDetails from a JSON string
carrier_and_isp_assigned_targeting_option_details_instance = CarrierAndIspAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(CarrierAndIspAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
carrier_and_isp_assigned_targeting_option_details_dict = carrier_and_isp_assigned_targeting_option_details_instance.to_dict()
# create an instance of CarrierAndIspAssignedTargetingOptionDetails from a dict
carrier_and_isp_assigned_targeting_option_details_from_dict = CarrierAndIspAssignedTargetingOptionDetails.from_dict(carrier_and_isp_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


