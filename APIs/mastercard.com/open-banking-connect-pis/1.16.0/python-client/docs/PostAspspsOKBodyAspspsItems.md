# PostAspspsOKBodyAspspsItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspsp_services** | **List[str]** | Provided services, AIS - account information, PIS - payment initiation | [optional] 
**capabilities** | **Dict[str, bool]** | Capabilities related to api profile assigned to ASPSP | [optional] 
**country** | **str** | Country code | [optional] 
**id** | **str** | Identification of the ASPSP | [optional] 
**logo** | [**LogoObject**](LogoObject.md) |  | [optional] 
**name** | **str** | Name of the ASPSP | [optional] 
**profile** | **str** | ASPSP profile | [optional] 

## Example

```python
from openapi_client.models.post_aspsps_ok_body_aspsps_items import PostAspspsOKBodyAspspsItems

# TODO update the JSON string below
json = "{}"
# create an instance of PostAspspsOKBodyAspspsItems from a JSON string
post_aspsps_ok_body_aspsps_items_instance = PostAspspsOKBodyAspspsItems.from_json(json)
# print the JSON string representation of the object
print(PostAspspsOKBodyAspspsItems.to_json())

# convert the object into a dict
post_aspsps_ok_body_aspsps_items_dict = post_aspsps_ok_body_aspsps_items_instance.to_dict()
# create an instance of PostAspspsOKBodyAspspsItems from a dict
post_aspsps_ok_body_aspsps_items_from_dict = PostAspspsOKBodyAspspsItems.from_dict(post_aspsps_ok_body_aspsps_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


