# EndUserPingUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_products** | **List[str]** | Supplied as an array of maps where each map describes an existing or new product e.g [{id:exising_product_id, name:existing name}, {id:new_product_id, name: new product name}].  Existing product id/names held in your account can be referenced at https://feedback.pendo.io/app/#/vendor/products | [optional] 
**created_at** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**roles** | **str** |  | [optional] 
**tags** | **object** | Tags can contain simple tags or categorised tags. Simple tags are supplied as an array of Strings Simple Tag Example: [&#39;Foo&#39;, &#39;Bar&#39;].  To put the tags in categories replace the Strings with maps of using tag category as the key and tag value as the value where value can be array of strings, e.g Categorised Tag Example: [ {&#39;Color&#39;:[&#39;Red&#39;, &#39;Yellow&#39;]},  {&#39;Flavor&#39;:[&#39;Cherry&#39;]} ]  Simple and categorised tags can be mixed in the same array. Below validations are done on the tag values of both simple and categorised tags: 1. Tag values must be strings 2. Tags must be at least 2 characters in length 3. Invalid characters (we dont accept following characters in tag value)  , | { } : &lt; &gt;  | [optional] 

## Example

```python
from openapi_client.models.end_user_ping_user import EndUserPingUser

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserPingUser from a JSON string
end_user_ping_user_instance = EndUserPingUser.from_json(json)
# print the JSON string representation of the object
print(EndUserPingUser.to_json())

# convert the object into a dict
end_user_ping_user_dict = end_user_ping_user_instance.to_dict()
# create an instance of EndUserPingUser from a dict
end_user_ping_user_from_dict = EndUserPingUser.from_dict(end_user_ping_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


