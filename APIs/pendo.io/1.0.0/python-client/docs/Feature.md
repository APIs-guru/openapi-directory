# Feature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_url** | **str** | URL for this Feature | [optional] 
**created_at** | **str** |  | [optional] 
**created_by_user_id** | **int** |  | [optional] 
**declined_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**developing_at** | **str** |  | [optional] 
**effort** | **int** | How much Effort is assigned to the development of this Feature. Not visible to EndUsers | [optional] 
**form_entry** | **str** | a JSON serialized version of the Form containing the description and other fields for this Feature. | [optional] 
**id** | **float** |  | [optional] 
**is_private** | **bool** | Is this Feature hidden from EndUsers? | [optional] 
**merged_to_feature_id** | **int** | If this Feature was merged into another, the ID of the preserved Feature | [optional] 
**planned_at** | **str** |  | [optional] 
**products** | **List[str]** |  | [optional] 
**released_at** | **str** |  | [optional] 
**resolution** | **str** | The latest Resolution set by the VendorUser | [optional] 
**resolved_by_user_id** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**status_changed_at** | **str** |  | [optional] 
**tags** | **object** | Tags can contain simple tags or categorised tags. Simple tags are supplied as an array of Strings Simple Tag Example: [&#39;Foo&#39;, &#39;Bar&#39;].  To put the tags in categories replace the Strings with maps of using tag category as the key and tag value as the value where value can be array of strings, e.g Categorised Tag Example: [ {&#39;Color&#39;:[&#39;Red&#39;, &#39;Yellow&#39;]},  {&#39;Flavor&#39;:[&#39;Cherry&#39;]} ]  Simple and categorised tags can be mixed in the same array. Below validations are done on the tag values of both simple and categorised tags: 1. Tag values must be strings 2. Tags must be at least 2 characters in length 3. Invalid characters (we dont accept following characters in tag value)  , | { } : &lt; &gt;  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**updated_by_user_id** | **int** |  | [optional] 
**uploads** | **List[str]** |  | [optional] 
**vendor_id** | **int** |  | [optional] 
**view_count** | **int** | How many times has this Feature been viewed. May only be visible to VendorUsers, depending on config | [optional] 
**waiting_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


