# PaginatedArtifactContentInformationList

A paginated list of ArtifactContentInformations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[ArtifactContentInformation]**](ArtifactContentInformation.md) | An array of objects of type ArtifactContentInformation. | [optional] 

## Example

```python
from openapi_client.models.paginated_artifact_content_information_list import PaginatedArtifactContentInformationList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedArtifactContentInformationList from a JSON string
paginated_artifact_content_information_list_instance = PaginatedArtifactContentInformationList.from_json(json)
# print the JSON string representation of the object
print(PaginatedArtifactContentInformationList.to_json())

# convert the object into a dict
paginated_artifact_content_information_list_dict = paginated_artifact_content_information_list_instance.to_dict()
# create an instance of PaginatedArtifactContentInformationList from a dict
paginated_artifact_content_information_list_from_dict = PaginatedArtifactContentInformationList.from_dict(paginated_artifact_content_information_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


