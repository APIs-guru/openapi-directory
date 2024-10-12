# RelatedUrl

Metadata for any related URL information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label to describe usage of the URL | [optional] 
**url** | **str** | Specific URL to associate with the note | [optional] 

## Example

```python
from openapi_client.models.related_url import RelatedUrl

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedUrl from a JSON string
related_url_instance = RelatedUrl.from_json(json)
# print the JSON string representation of the object
print(RelatedUrl.to_json())

# convert the object into a dict
related_url_dict = related_url_instance.to_dict()
# create an instance of RelatedUrl from a dict
related_url_from_dict = RelatedUrl.from_dict(related_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


