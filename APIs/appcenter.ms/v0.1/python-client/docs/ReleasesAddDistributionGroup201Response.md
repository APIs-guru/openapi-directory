# ReleasesAddDistributionGroup201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique id for the release destination | 
**mandatory_update** | **bool** | Flag to mark the release for the provided destinations as mandatory | 
**provisioning_status_url** | **str** | The url to check provisioning status. | [optional] 

## Example

```python
from openapi_client.models.releases_add_distribution_group201_response import ReleasesAddDistributionGroup201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesAddDistributionGroup201Response from a JSON string
releases_add_distribution_group201_response_instance = ReleasesAddDistributionGroup201Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesAddDistributionGroup201Response.to_json())

# convert the object into a dict
releases_add_distribution_group201_response_dict = releases_add_distribution_group201_response_instance.to_dict()
# create an instance of ReleasesAddDistributionGroup201Response from a dict
releases_add_distribution_group201_response_from_dict = ReleasesAddDistributionGroup201Response.from_dict(releases_add_distribution_group201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


