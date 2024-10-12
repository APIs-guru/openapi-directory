# AddTargetedPublishersRequest

A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_ids** | **List[str]** | A list of publisher IDs to target in the pretargeting configuration. These values will be added to the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. | [optional] 
**targeting_mode** | **str** | Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned. | [optional] 

## Example

```python
from openapi_client.models.add_targeted_publishers_request import AddTargetedPublishersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTargetedPublishersRequest from a JSON string
add_targeted_publishers_request_instance = AddTargetedPublishersRequest.from_json(json)
# print the JSON string representation of the object
print(AddTargetedPublishersRequest.to_json())

# convert the object into a dict
add_targeted_publishers_request_dict = add_targeted_publishers_request_instance.to_dict()
# create an instance of AddTargetedPublishersRequest from a dict
add_targeted_publishers_request_from_dict = AddTargetedPublishersRequest.from_dict(add_targeted_publishers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


