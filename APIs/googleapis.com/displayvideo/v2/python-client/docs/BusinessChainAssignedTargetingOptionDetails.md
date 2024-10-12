# BusinessChainAssignedTargetingOptionDetails

Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of a business chain, e.g. \&quot;KFC\&quot;, \&quot;Chase Bank\&quot;. | [optional] [readonly] 
**proximity_radius_amount** | **float** | Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is &#x60;DISTANCE_UNIT_KILOMETERS&#x60; and 1 to 500 if unit is &#x60;DISTANCE_UNIT_MILES&#x60;. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6. | [optional] 
**proximity_radius_unit** | **str** | Required. The unit of distance by which the targeting radius is measured. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60;. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions. | [optional] 

## Example

```python
from openapi_client.models.business_chain_assigned_targeting_option_details import BusinessChainAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessChainAssignedTargetingOptionDetails from a JSON string
business_chain_assigned_targeting_option_details_instance = BusinessChainAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(BusinessChainAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
business_chain_assigned_targeting_option_details_dict = business_chain_assigned_targeting_option_details_instance.to_dict()
# create an instance of BusinessChainAssignedTargetingOptionDetails from a dict
business_chain_assigned_targeting_option_details_from_dict = BusinessChainAssignedTargetingOptionDetails.from_dict(business_chain_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


