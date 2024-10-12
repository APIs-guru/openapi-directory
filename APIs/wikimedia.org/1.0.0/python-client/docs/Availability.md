# Availability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_the_news** | **List[str]** | domains for wikis with this feature enabled, or [ &#39;*.&lt;project&gt;.org&#39; ] for all wikis in a project | 
**most_read** | **List[str]** | domains for wikis with this feature enabled, or [ &#39;*.&lt;project&gt;.org&#39; ] for all wikis in a project | 
**on_this_day** | **List[str]** | domains for wikis with this feature enabled, or [ &#39;*.&lt;project&gt;.org&#39; ] for all wikis in a project | 
**picture_of_the_day** | **List[str]** | domains for wikis with this feature enabled, or [ &#39;*.&lt;project&gt;.org&#39; ] for all wikis in a project | 
**todays_featured_article** | **List[str]** | domains for wikis with this feature enabled, or [ &#39;*.&lt;project&gt;.org&#39; ] for all wikis in a project | 

## Example

```python
from openapi_client.models.availability import Availability

# TODO update the JSON string below
json = "{}"
# create an instance of Availability from a JSON string
availability_instance = Availability.from_json(json)
# print the JSON string representation of the object
print(Availability.to_json())

# convert the object into a dict
availability_dict = availability_instance.to_dict()
# create an instance of Availability from a dict
availability_from_dict = Availability.from_dict(availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


