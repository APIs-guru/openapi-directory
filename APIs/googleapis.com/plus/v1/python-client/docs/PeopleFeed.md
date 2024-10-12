# PeopleFeed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[Person]**](Person.md) | The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method. | [optional] 
**kind** | **str** | Identifies this resource as a collection of people. Value: \&quot;plus#peopleFeed\&quot;. | [optional] [default to 'plus#peopleFeed']
**next_page_token** | **str** | The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**self_link** | **str** | Link to this resource. | [optional] 
**title** | **str** | The title of this collection of people. | [optional] 
**total_items** | **int** | The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections. | [optional] 

## Example

```python
from openapi_client.models.people_feed import PeopleFeed

# TODO update the JSON string below
json = "{}"
# create an instance of PeopleFeed from a JSON string
people_feed_instance = PeopleFeed.from_json(json)
# print the JSON string representation of the object
print(PeopleFeed.to_json())

# convert the object into a dict
people_feed_dict = people_feed_instance.to_dict()
# create an instance of PeopleFeed from a dict
people_feed_from_dict = PeopleFeed.from_dict(people_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


