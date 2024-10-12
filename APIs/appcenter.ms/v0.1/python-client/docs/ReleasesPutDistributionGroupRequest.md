# ReleasesPutDistributionGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandatory_update** | **bool** | Whether a release is mandatory for the given destination | 

## Example

```python
from openapi_client.models.releases_put_distribution_group_request import ReleasesPutDistributionGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesPutDistributionGroupRequest from a JSON string
releases_put_distribution_group_request_instance = ReleasesPutDistributionGroupRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesPutDistributionGroupRequest.to_json())

# convert the object into a dict
releases_put_distribution_group_request_dict = releases_put_distribution_group_request_instance.to_dict()
# create an instance of ReleasesPutDistributionGroupRequest from a dict
releases_put_distribution_group_request_from_dict = ReleasesPutDistributionGroupRequest.from_dict(releases_put_distribution_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


