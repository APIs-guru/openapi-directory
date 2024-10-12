# PagedPropertyInfoList

The paged list of Service Fabric properties under a given name. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token is not included in the response. | [optional] 
**is_consistent** | **bool** | Indicates whether any property under the given name has been modified during the enumeration. If there was a modification, this property value is false. | [optional] 
**properties** | [**List[PropertyInfo]**](PropertyInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.paged_property_info_list import PagedPropertyInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of PagedPropertyInfoList from a JSON string
paged_property_info_list_instance = PagedPropertyInfoList.from_json(json)
# print the JSON string representation of the object
print(PagedPropertyInfoList.to_json())

# convert the object into a dict
paged_property_info_list_dict = paged_property_info_list_instance.to_dict()
# create an instance of PagedPropertyInfoList from a dict
paged_property_info_list_from_dict = PagedPropertyInfoList.from_dict(paged_property_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


