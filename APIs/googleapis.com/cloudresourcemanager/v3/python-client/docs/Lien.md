# Lien

A Lien represents an encumbrance on the actions that can be performed on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of this Lien. | [optional] 
**name** | **str** | A system-generated unique identifier for this Lien. Example: &#x60;liens/1234abcd&#x60; | [optional] 
**origin** | **str** | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: &#39;compute.googleapis.com&#39; | [optional] 
**parent** | **str** | A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: &#x60;projects/1234&#x60; | [optional] 
**reason** | **str** | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: &#39;Holds production API key&#39; | [optional] 
**restrictions** | **List[str]** | The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: [&#39;resourcemanager.projects.delete&#39;] | [optional] 

## Example

```python
from openapi_client.models.lien import Lien

# TODO update the JSON string below
json = "{}"
# create an instance of Lien from a JSON string
lien_instance = Lien.from_json(json)
# print the JSON string representation of the object
print(Lien.to_json())

# convert the object into a dict
lien_dict = lien_instance.to_dict()
# create an instance of Lien from a dict
lien_from_dict = Lien.from_dict(lien_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


