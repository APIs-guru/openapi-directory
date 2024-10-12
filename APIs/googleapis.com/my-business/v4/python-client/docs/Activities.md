# Activities

Amenities and features related to leisure and play.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beach_access** | **bool** | Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel&#39;s proximity is close to but not right on the beach). | [optional] 
**beach_access_exception** | **str** | Beach access exception. | [optional] 
**beach_front** | **bool** | Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic. | [optional] 
**beach_front_exception** | **str** | Beach front exception. | [optional] 
**bicycle_rental** | **bool** | Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee. | [optional] 
**bicycle_rental_exception** | **str** | Bicycle rental exception. | [optional] 
**boutique_stores** | **bool** | Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store. | [optional] 
**boutique_stores_exception** | **str** | Boutique stores exception. | [optional] 
**casino** | **bool** | Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby. | [optional] 
**casino_exception** | **str** | Casino exception. | [optional] 
**free_bicycle_rental** | **bool** | Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free. | [optional] 
**free_bicycle_rental_exception** | **str** | Free bicycle rental exception. | [optional] 
**free_watercraft_rental** | **bool** | Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free. | [optional] 
**free_watercraft_rental_exception** | **str** | Free Watercraft rental exception. | [optional] 
**game_room** | **bool** | Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center. | [optional] 
**game_room_exception** | **str** | Game room exception. | [optional] 
**golf** | **bool** | Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee. | [optional] 
**golf_exception** | **str** | Golf exception. | [optional] 
**horseback_riding** | **bool** | Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction. | [optional] 
**horseback_riding_exception** | **str** | Horseback riding exception. | [optional] 
**nightclub** | **bool** | Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts. | [optional] 
**nightclub_exception** | **str** | Nightclub exception. | [optional] 
**private_beach** | **bool** | Private beach. The beach which is in close proximity to the hotel is open only to guests. | [optional] 
**private_beach_exception** | **str** | Private beach exception. | [optional] 
**scuba** | **bool** | Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool. | [optional] 
**scuba_exception** | **str** | Scuba exception. | [optional] 
**snorkeling** | **bool** | Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving. | [optional] 
**snorkeling_exception** | **str** | Snorkeling exception. | [optional] 
**tennis** | **bool** | Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided. | [optional] 
**tennis_exception** | **str** | Tennis exception. | [optional] 
**water_skiing** | **bool** | Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean. | [optional] 
**water_skiing_exception** | **str** | Water skiing exception. | [optional] 
**watercraft_rental** | **bool** | Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski). | [optional] 
**watercraft_rental_exception** | **str** | Watercraft rental exception. | [optional] 

## Example

```python
from openapi_client.models.activities import Activities

# TODO update the JSON string below
json = "{}"
# create an instance of Activities from a JSON string
activities_instance = Activities.from_json(json)
# print the JSON string representation of the object
print(Activities.to_json())

# convert the object into a dict
activities_dict = activities_instance.to_dict()
# create an instance of Activities from a dict
activities_from_dict = Activities.from_dict(activities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


