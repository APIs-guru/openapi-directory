# GenerateConsistencyTokenResponse

Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency_token** | **str** | The generated consistency token. | [optional] 

## Example

```python
from openapi_client.models.generate_consistency_token_response import GenerateConsistencyTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateConsistencyTokenResponse from a JSON string
generate_consistency_token_response_instance = GenerateConsistencyTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateConsistencyTokenResponse.to_json())

# convert the object into a dict
generate_consistency_token_response_dict = generate_consistency_token_response_instance.to_dict()
# create an instance of GenerateConsistencyTokenResponse from a dict
generate_consistency_token_response_from_dict = GenerateConsistencyTokenResponse.from_dict(generate_consistency_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


