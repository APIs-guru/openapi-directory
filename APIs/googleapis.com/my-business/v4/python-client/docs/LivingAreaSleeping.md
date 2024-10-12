# LivingAreaSleeping

Information about sleeping features in the living area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beds_count** | **int** | Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds. | [optional] 
**beds_count_exception** | **str** | Beds count exception. | [optional] 
**bunk_beds_count** | **int** | Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed. | [optional] 
**bunk_beds_count_exception** | **str** | Bunk beds count exception. | [optional] 
**cribs_count** | **int** | Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed | [optional] 
**cribs_count_exception** | **str** | Cribs count exception. | [optional] 
**double_beds_count** | **int** | Double beds count. The number of medium beds measuring 53\&quot;W x 75\&quot;L (135cm x 191cm). Also known as full size bed. | [optional] 
**double_beds_count_exception** | **str** | Double beds count exception. | [optional] 
**feather_pillows** | **bool** | Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese. | [optional] 
**feather_pillows_exception** | **str** | Feather pillows exception. | [optional] 
**hypoallergenic_bedding** | **bool** | Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander. | [optional] 
**hypoallergenic_bedding_exception** | **str** | Hypoallergenic bedding exception. | [optional] 
**king_beds_count** | **int** | King beds count. The number of large beds measuring 76\&quot;W x 80\&quot;L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king. | [optional] 
**king_beds_count_exception** | **str** | King beds count exception. | [optional] 
**memory_foam_pillows** | **bool** | Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down. | [optional] 
**memory_foam_pillows_exception** | **str** | Memory foam pillows exception. | [optional] 
**other_beds_count** | **int** | Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots. | [optional] 
**other_beds_count_exception** | **str** | Other beds count exception. | [optional] 
**queen_beds_count** | **int** | Queen beds count. The number of medium-large beds measuring 60\&quot;W x 80\&quot;L (152cm x 102cm). | [optional] 
**queen_beds_count_exception** | **str** | Queen beds count exception. | [optional] 
**roll_away_beds_count** | **int** | Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request. | [optional] 
**roll_away_beds_count_exception** | **str** | Roll away beds count exception. | [optional] 
**single_or_twin_beds_count** | **int** | Single or twin count beds. The number of smaller beds measuring 38\&quot;W x 75\&quot;L (97cm x 191cm) that can accommodate one adult. | [optional] 
**single_or_twin_beds_count_exception** | **str** | Single or twin beds count exception. | [optional] 
**sofa_beds_count** | **int** | Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress. | [optional] 
**sofa_beds_count_exception** | **str** | Sofa beds count exception. | [optional] 
**synthetic_pillows** | **bool** | Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers. | [optional] 
**synthetic_pillows_exception** | **str** | Synthetic pillows exception. | [optional] 

## Example

```python
from openapi_client.models.living_area_sleeping import LivingAreaSleeping

# TODO update the JSON string below
json = "{}"
# create an instance of LivingAreaSleeping from a JSON string
living_area_sleeping_instance = LivingAreaSleeping.from_json(json)
# print the JSON string representation of the object
print(LivingAreaSleeping.to_json())

# convert the object into a dict
living_area_sleeping_dict = living_area_sleeping_instance.to_dict()
# create an instance of LivingAreaSleeping from a dict
living_area_sleeping_from_dict = LivingAreaSleeping.from_dict(living_area_sleeping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


