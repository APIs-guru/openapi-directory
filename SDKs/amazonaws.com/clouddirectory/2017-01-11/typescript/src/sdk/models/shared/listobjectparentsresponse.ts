import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";



export class ListObjectParentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentLinks", elemType: ObjectIdentifierAndLinkNameTuple })
  parentLinks?: ObjectIdentifierAndLinkNameTuple[];

  @SpeakeasyMetadata({ data: "json, name=Parents" })
  parents?: Map<string, string>;
}
