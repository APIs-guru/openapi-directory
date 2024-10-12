# TargetingTemplatesListResponse

Targeting Template List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#targetingTemplatesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**targeting_templates** | [**List[TargetingTemplate]**](TargetingTemplate.md) | Targeting template collection. | [optional] 

## Example

```python
from openapi_client.models.targeting_templates_list_response import TargetingTemplatesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingTemplatesListResponse from a JSON string
targeting_templates_list_response_instance = TargetingTemplatesListResponse.from_json(json)
# print the JSON string representation of the object
print(TargetingTemplatesListResponse.to_json())

# convert the object into a dict
targeting_templates_list_response_dict = targeting_templates_list_response_instance.to_dict()
# create an instance of TargetingTemplatesListResponse from a dict
targeting_templates_list_response_from_dict = TargetingTemplatesListResponse.from_dict(targeting_templates_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


