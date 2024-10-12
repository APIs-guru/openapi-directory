# BusinessChainTargetingOptionDetails

Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_chain** | **str** | Output only. The display name of the business chain, e.g. \&quot;KFC\&quot;, \&quot;Chase Bank\&quot;. | [optional] [readonly] 
**geo_region** | **str** | Output only. The display name of the geographic region, e.g. \&quot;Ontario, Canada\&quot;. | [optional] [readonly] 
**geo_region_type** | **str** | Output only. The type of the geographic region. | [optional] [readonly] 

## Example

```python
from openapi_client.models.business_chain_targeting_option_details import BusinessChainTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessChainTargetingOptionDetails from a JSON string
business_chain_targeting_option_details_instance = BusinessChainTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(BusinessChainTargetingOptionDetails.to_json())

# convert the object into a dict
business_chain_targeting_option_details_dict = business_chain_targeting_option_details_instance.to_dict()
# create an instance of BusinessChainTargetingOptionDetails from a dict
business_chain_targeting_option_details_from_dict = BusinessChainTargetingOptionDetails.from_dict(business_chain_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


