# RulesResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_token** | **str** | The next token. | [optional] 
**result_count** | **int** | Number of Rules in result set. | [optional] 
**sent** | **str** |  | 
**summary** | [**RulesRequestSummary**](RulesRequestSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.rules_response_metadata import RulesResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RulesResponseMetadata from a JSON string
rules_response_metadata_instance = RulesResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(RulesResponseMetadata.to_json())

# convert the object into a dict
rules_response_metadata_dict = rules_response_metadata_instance.to_dict()
# create an instance of RulesResponseMetadata from a dict
rules_response_metadata_from_dict = RulesResponseMetadata.from_dict(rules_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


