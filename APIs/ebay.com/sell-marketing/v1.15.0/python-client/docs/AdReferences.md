# AdReferences

This type is a container for a list of ad IDs and their associated URIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | [**List[AdReference]**](AdReference.md) | A list of ad IDs. An ad ID is generated for each successfully created ad. Only one ad can be created per operation. | [optional] 

## Example

```python
from openapi_client.models.ad_references import AdReferences

# TODO update the JSON string below
json = "{}"
# create an instance of AdReferences from a JSON string
ad_references_instance = AdReferences.from_json(json)
# print the JSON string representation of the object
print(AdReferences.to_json())

# convert the object into a dict
ad_references_dict = ad_references_instance.to_dict()
# create an instance of AdReferences from a dict
ad_references_from_dict = AdReferences.from_dict(ad_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


