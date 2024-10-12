# ProjectLandingPageInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** |  | [optional] 
**board_id** | **int** |  | [optional] 
**board_name** | **str** |  | [optional] 
**project_key** | **str** |  | [optional] 
**project_type** | **str** |  | [optional] 
**queue_category** | **str** |  | [optional] 
**queue_id** | **int** |  | [optional] 
**queue_name** | **str** |  | [optional] 
**simple_board** | **bool** |  | [optional] 
**simplified** | **bool** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.project_landing_page_info import ProjectLandingPageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectLandingPageInfo from a JSON string
project_landing_page_info_instance = ProjectLandingPageInfo.from_json(json)
# print the JSON string representation of the object
print(ProjectLandingPageInfo.to_json())

# convert the object into a dict
project_landing_page_info_dict = project_landing_page_info_instance.to_dict()
# create an instance of ProjectLandingPageInfo from a dict
project_landing_page_info_from_dict = ProjectLandingPageInfo.from_dict(project_landing_page_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


