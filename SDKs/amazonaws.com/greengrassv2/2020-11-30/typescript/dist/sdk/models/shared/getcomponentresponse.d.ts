import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipeOutputFormatEnum } from "./recipeoutputformatenum";
export declare class GetComponentResponse extends SpeakeasyBase {
    recipe: string;
    recipeOutputFormat: RecipeOutputFormatEnum;
    tags?: Map<string, string>;
}
