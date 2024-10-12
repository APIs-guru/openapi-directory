# CarrierAndIspTargetingOptionDetails

Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the carrier or ISP. | [optional] [readonly] 
**type** | **str** | Output only. The type indicating if it&#39;s carrier or ISP. | [optional] [readonly] 

## Example

```python
from openapi_client.models.carrier_and_isp_targeting_option_details import CarrierAndIspTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CarrierAndIspTargetingOptionDetails from a JSON string
carrier_and_isp_targeting_option_details_instance = CarrierAndIspTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(CarrierAndIspTargetingOptionDetails.to_json())

# convert the object into a dict
carrier_and_isp_targeting_option_details_dict = carrier_and_isp_targeting_option_details_instance.to_dict()
# create an instance of CarrierAndIspTargetingOptionDetails from a dict
carrier_and_isp_targeting_option_details_from_dict = CarrierAndIspTargetingOptionDetails.from_dict(carrier_and_isp_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


