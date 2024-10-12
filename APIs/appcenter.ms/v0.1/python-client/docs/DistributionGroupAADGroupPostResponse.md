# DistributionGroupAADGroupPostResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_id** | **str** | The AAD unique id (UUID) of the AAD group. | [optional] 
**display_name** | **str** | The display name of the AAD group | [optional] 
**id** | **str** | The internal unique id (UUID) of the AAD group. | [optional] 

## Example

```python
from openapi_client.models.distribution_group_aad_group_post_response import DistributionGroupAADGroupPostResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionGroupAADGroupPostResponse from a JSON string
distribution_group_aad_group_post_response_instance = DistributionGroupAADGroupPostResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionGroupAADGroupPostResponse.to_json())

# convert the object into a dict
distribution_group_aad_group_post_response_dict = distribution_group_aad_group_post_response_instance.to_dict()
# create an instance of DistributionGroupAADGroupPostResponse from a dict
distribution_group_aad_group_post_response_from_dict = DistributionGroupAADGroupPostResponse.from_dict(distribution_group_aad_group_post_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


