# UserScrubGeoObjectSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**up_to_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 
**user** | [**UserComplianceSchemaUser**](UserComplianceSchemaUser.md) |  | 

## Example

```python
from openapi_client.models.user_scrub_geo_object_schema import UserScrubGeoObjectSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserScrubGeoObjectSchema from a JSON string
user_scrub_geo_object_schema_instance = UserScrubGeoObjectSchema.from_json(json)
# print the JSON string representation of the object
print(UserScrubGeoObjectSchema.to_json())

# convert the object into a dict
user_scrub_geo_object_schema_dict = user_scrub_geo_object_schema_instance.to_dict()
# create an instance of UserScrubGeoObjectSchema from a dict
user_scrub_geo_object_schema_from_dict = UserScrubGeoObjectSchema.from_dict(user_scrub_geo_object_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


