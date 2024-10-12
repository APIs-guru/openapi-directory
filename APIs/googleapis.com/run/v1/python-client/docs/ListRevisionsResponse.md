# ListRevisionsResponse

ListRevisionsResponse is a list of Revision resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;serving.knative.dev/v1\&quot;. | [optional] 
**items** | [**List[Revision]**](Revision.md) | List of Revisions. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;RevisionList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_revisions_response import ListRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRevisionsResponse from a JSON string
list_revisions_response_instance = ListRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRevisionsResponse.to_json())

# convert the object into a dict
list_revisions_response_dict = list_revisions_response_instance.to_dict()
# create an instance of ListRevisionsResponse from a dict
list_revisions_response_from_dict = ListRevisionsResponse.from_dict(list_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


