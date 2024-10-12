# Blacklist


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_listed** | **bool** | True if the host is currently black-listed | 
**list_host** | **str** | The hostname of the DNSBL | 
**list_name** | **str** | The name of the DNSBL | 
**list_rating** | **int** | The list rating [1-3] with 1 being the best rating and 3 the lowest rating | 
**response_time** | **int** | The DNSBL server response time in milliseconds | 
**return_code** | **str** | The specific return code for this listing (only set if listed) | 
**txt_record** | **str** | The TXT record returned for this listing (only set if listed) | 

## Example

```python
from openapi_client.models.blacklist import Blacklist

# TODO update the JSON string below
json = "{}"
# create an instance of Blacklist from a JSON string
blacklist_instance = Blacklist.from_json(json)
# print the JSON string representation of the object
print(Blacklist.to_json())

# convert the object into a dict
blacklist_dict = blacklist_instance.to_dict()
# create an instance of Blacklist from a dict
blacklist_from_dict = Blacklist.from_dict(blacklist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


