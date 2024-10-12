# Activity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**Acl**](Acl.md) |  | [optional] 
**actor** | [**ActivityActor**](ActivityActor.md) |  | [optional] 
**address** | **str** | Street address where this activity occurred. | [optional] 
**annotation** | **str** | Additional content added by the person who shared this activity, applicable only when resharing an activity. | [optional] 
**crosspost_source** | **str** | If this activity is a crosspost from another system, this property specifies the ID of the original activity. | [optional] 
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**geocode** | **str** | Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated. | [optional] 
**id** | **str** | The ID of this activity. | [optional] 
**kind** | **str** | Identifies this resource as an activity. Value: \&quot;plus#activity\&quot;. | [optional] [default to 'plus#activity']
**location** | [**Place**](Place.md) |  | [optional] 
**object** | [**ActivityObject**](ActivityObject.md) |  | [optional] 
**place_id** | **str** | ID of the place where this activity occurred. | [optional] 
**place_name** | **str** | Name of the place where this activity occurred. | [optional] 
**provider** | [**ActivityProvider**](ActivityProvider.md) |  | [optional] 
**published** | **datetime** | The time at which this activity was initially published. Formatted as an RFC 3339 timestamp. | [optional] 
**radius** | **str** | Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode. | [optional] 
**title** | **str** | Title of this activity. | [optional] 
**updated** | **datetime** | The time at which this activity was last updated. Formatted as an RFC 3339 timestamp. | [optional] 
**url** | **str** | The link to this activity. | [optional] 
**verb** | **str** | This activity&#39;s verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:   - \&quot;post\&quot; - Publish content to the stream.  - \&quot;share\&quot; - Reshare an activity. | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


