# AccountWithTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_paying** | **bool** |  | [optional] 
**monthly_value** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | **object** | Tags can contain simple tags or categorised tags. Simple tags are supplied as an array of Strings Simple Tag Example: [&#39;Foo&#39;, &#39;Bar&#39;].  To put the tags in categories replace the Strings with maps of using tag category as the key and tag value as the value where value can be array of strings, e.g Categorised Tag Example: [ {&#39;Color&#39;:[&#39;Red&#39;, &#39;Yellow&#39;]},  {&#39;Flavor&#39;:[&#39;Cherry&#39;]} ]  Simple and categorised tags can be mixed in the same array. Below validations are done on the tag values of both simple and categorised tags: 1. Tag values must be strings 2. Tags must be at least 2 characters in length 3. Invalid characters (we dont accept following characters in tag value)  , | { } : &lt; &gt;  | [optional] 

## Example

```python
from openapi_client.models.account_with_tags import AccountWithTags

# TODO update the JSON string below
json = "{}"
# create an instance of AccountWithTags from a JSON string
account_with_tags_instance = AccountWithTags.from_json(json)
# print the JSON string representation of the object
print(AccountWithTags.to_json())

# convert the object into a dict
account_with_tags_dict = account_with_tags_instance.to_dict()
# create an instance of AccountWithTags from a dict
account_with_tags_from_dict = AccountWithTags.from_dict(account_with_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


