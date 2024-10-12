# RemoveTargetedPublishersRequest

A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_ids** | **List[str]** | A list of publisher IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. | [optional] 

## Example

```python
from openapi_client.models.remove_targeted_publishers_request import RemoveTargetedPublishersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveTargetedPublishersRequest from a JSON string
remove_targeted_publishers_request_instance = RemoveTargetedPublishersRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveTargetedPublishersRequest.to_json())

# convert the object into a dict
remove_targeted_publishers_request_dict = remove_targeted_publishers_request_instance.to_dict()
# create an instance of RemoveTargetedPublishersRequest from a dict
remove_targeted_publishers_request_from_dict = RemoveTargetedPublishersRequest.from_dict(remove_targeted_publishers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


