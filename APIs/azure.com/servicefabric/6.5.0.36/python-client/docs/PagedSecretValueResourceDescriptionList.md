# PagedSecretValueResourceDescriptionList

The list of values of a secret resource, paged if the number of results exceeds the limits of a single message. The next set of results can be obtained by executing the same query with the continuation token provided in the previous page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token is not included in the response. | [optional] 
**items** | [**List[SecretValueResourceDescription]**](SecretValueResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.paged_secret_value_resource_description_list import PagedSecretValueResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of PagedSecretValueResourceDescriptionList from a JSON string
paged_secret_value_resource_description_list_instance = PagedSecretValueResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(PagedSecretValueResourceDescriptionList.to_json())

# convert the object into a dict
paged_secret_value_resource_description_list_dict = paged_secret_value_resource_description_list_instance.to_dict()
# create an instance of PagedSecretValueResourceDescriptionList from a dict
paged_secret_value_resource_description_list_from_dict = PagedSecretValueResourceDescriptionList.from_dict(paged_secret_value_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


