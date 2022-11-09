import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";


export class ListObjectParentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParentLinks", elemType: shared.ObjectIdentifierAndLinkNameTuple })
  parentLinks?: ObjectIdentifierAndLinkNameTuple[];

  @Metadata({ data: "json, name=Parents" })
  parents?: Map<string, string>;
}
