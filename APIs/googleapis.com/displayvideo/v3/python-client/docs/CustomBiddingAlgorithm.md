# CustomBiddingAlgorithm

A single custom bidding algorithm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Immutable. The unique ID of the advertiser that owns the custom bidding algorithm. | [optional] 
**custom_bidding_algorithm_id** | **str** | Output only. The unique ID of the custom bidding algorithm. Assigned by the system. | [optional] [readonly] 
**custom_bidding_algorithm_type** | **str** | Required. Immutable. The type of custom bidding algorithm. | [optional] 
**display_name** | **str** | Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**entity_status** | **str** | Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * &#x60;ENTITY_STATUS_ACTIVE&#x60; * &#x60;ENTITY_STATUS_ARCHIVED&#x60; | [optional] 
**model_details** | [**List[CustomBiddingModelDetails]**](CustomBiddingModelDetails.md) | Output only. The details of custom bidding models for each advertiser who has access. This field may only include the details of the queried advertiser if the algorithm [&#x60;owner&#x60;](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [&#x60;accessor&#x60;](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor). | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the custom bidding algorithm. | [optional] [readonly] 
**partner_id** | **str** | Immutable. The unique ID of the partner that owns the custom bidding algorithm. | [optional] 
**shared_advertiser_ids** | **List[str]** | The IDs of the advertisers who have access to this algorithm. If advertiser_id is set, this field will only consist of that value. This field will not be set if the algorithm [&#x60;owner&#x60;](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [&#x60;accessor&#x60;](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor). | [optional] 

## Example

```python
from openapi_client.models.custom_bidding_algorithm import CustomBiddingAlgorithm

# TODO update the JSON string below
json = "{}"
# create an instance of CustomBiddingAlgorithm from a JSON string
custom_bidding_algorithm_instance = CustomBiddingAlgorithm.from_json(json)
# print the JSON string representation of the object
print(CustomBiddingAlgorithm.to_json())

# convert the object into a dict
custom_bidding_algorithm_dict = custom_bidding_algorithm_instance.to_dict()
# create an instance of CustomBiddingAlgorithm from a dict
custom_bidding_algorithm_from_dict = CustomBiddingAlgorithm.from_dict(custom_bidding_algorithm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


