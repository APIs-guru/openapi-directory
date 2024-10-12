# Business

Features of the property of specific interest to the business traveler.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_center** | **bool** | Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room. | [optional] 
**business_center_exception** | **str** | Business center exception. | [optional] 
**meeting_rooms** | **bool** | Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms. | [optional] 
**meeting_rooms_count** | **int** | Meeting rooms count. The number of meeting rooms at the property. | [optional] 
**meeting_rooms_count_exception** | **str** | Meeting rooms count exception. | [optional] 
**meeting_rooms_exception** | **str** | Meeting rooms exception. | [optional] 

## Example

```python
from openapi_client.models.business import Business

# TODO update the JSON string below
json = "{}"
# create an instance of Business from a JSON string
business_instance = Business.from_json(json)
# print the JSON string representation of the object
print(Business.to_json())

# convert the object into a dict
business_dict = business_instance.to_dict()
# create an instance of Business from a dict
business_from_dict = Business.from_dict(business_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


