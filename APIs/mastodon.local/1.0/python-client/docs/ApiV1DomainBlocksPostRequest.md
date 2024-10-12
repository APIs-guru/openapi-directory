# ApiV1DomainBlocksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Domain to block. | 

## Example

```python
from openapi_client.models.api_v1_domain_blocks_post_request import ApiV1DomainBlocksPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1DomainBlocksPostRequest from a JSON string
api_v1_domain_blocks_post_request_instance = ApiV1DomainBlocksPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1DomainBlocksPostRequest.to_json())

# convert the object into a dict
api_v1_domain_blocks_post_request_dict = api_v1_domain_blocks_post_request_instance.to_dict()
# create an instance of ApiV1DomainBlocksPostRequest from a dict
api_v1_domain_blocks_post_request_from_dict = ApiV1DomainBlocksPostRequest.from_dict(api_v1_domain_blocks_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


