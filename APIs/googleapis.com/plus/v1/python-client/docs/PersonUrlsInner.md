# PersonUrlsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label of the URL. | [optional] 
**type** | **str** | The type of URL. Possible values include, but are not limited to, the following values:   - \&quot;otherProfile\&quot; - URL for another profile.  - \&quot;contributor\&quot; - URL to a site for which this person is a contributor.  - \&quot;website\&quot; - URL for this Google+ Page&#39;s primary website.  - \&quot;other\&quot; - Other URL. | [optional] 
**value** | **str** | The URL value. | [optional] 

## Example

```python
from openapi_client.models.person_urls_inner import PersonUrlsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PersonUrlsInner from a JSON string
person_urls_inner_instance = PersonUrlsInner.from_json(json)
# print the JSON string representation of the object
print(PersonUrlsInner.to_json())

# convert the object into a dict
person_urls_inner_dict = person_urls_inner_instance.to_dict()
# create an instance of PersonUrlsInner from a dict
person_urls_inner_from_dict = PersonUrlsInner.from_dict(person_urls_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


